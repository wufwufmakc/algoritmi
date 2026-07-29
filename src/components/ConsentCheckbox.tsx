import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type ConsentCheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  /** Dark form surfaces (homepage callback). */
  dark?: boolean;
  id?: string;
  className?: string;
};

export function ConsentCheckbox({
  checked,
  onCheckedChange,
  disabled,
  dark = false,
  id = "privacy-consent",
  className,
}: ConsentCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-3 text-xs leading-relaxed",
        disabled && "cursor-not-allowed opacity-60",
        dark ? "text-[hsl(220_15%_62%)]" : "text-muted-foreground",
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange(e.target.checked)}
        required
        className={cn(
          "mt-0.5 h-4 w-4 shrink-0 rounded border accent-[hsl(222_80%_45%)]",
          dark ? "border-[hsl(222_25%_28%)] bg-[hsl(222_35%_9%)]" : "border-input",
        )}
      />
      <span>
        Я согласен(а) на обработку персональных данных в соответствии с{" "}
        <Link
          to="/privacy"
          className={cn(
            "underline underline-offset-2 transition-colors",
            dark ? "text-[hsl(222_80%_72%)] hover:text-white" : "text-primary hover:text-primary/80",
          )}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          Политикой конфиденциальности
        </Link>
      </span>
    </label>
  );
}

export const CONSENT_REQUIRED_MSG = "Подтвердите согласие на обработку персональных данных";
