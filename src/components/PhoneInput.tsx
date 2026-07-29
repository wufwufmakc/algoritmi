import type { ChangeEvent, ClipboardEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import { formatRuPhone, PHONE_PLACEHOLDER } from "@/lib/phone";
import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange" | "onKeyDown" | "onPaste" | "inputMode" | "autoComplete" | "maxLength"
> & {
  value: string;
  onValueChange: (value: string) => void;
};

export function PhoneInput({ value, onValueChange, className, ...props }: PhoneInputProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "Backspace") {
      e.preventDefault();
      const digits = value.replace(/\D/g, "");
      onValueChange(formatRuPhone(digits.slice(0, -1)));
      return;
    }
    if (e.key === "Delete") {
      e.preventDefault();
      onValueChange("");
      return;
    }
    const navKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End", "Enter"];
    if (navKeys.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    onValueChange(formatRuPhone(e.clipboardData.getData("text")));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(formatRuPhone(e.target.value));
  };

  return (
    <input
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      placeholder={PHONE_PLACEHOLDER}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      maxLength={18}
      className={cn(className)}
      {...props}
    />
  );
}
