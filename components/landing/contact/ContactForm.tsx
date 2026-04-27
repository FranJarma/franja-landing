"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";

import {
  BUDGET_RANGE_OPTIONS,
  CONTACT_SOURCE_OPTIONS,
  PROJECT_TYPE_LABELS,
  PROJECT_TYPES,
  URGENCY_OPTIONS,
} from "@/constants/contact-form";
import {
  createContactFormSchema,
  type ContactFormValues,
} from "@/src/contact-form/schema";
import type { Locale } from "@/src/i18n/config";
import { cn } from "@/lib/cn";
import type { ContactFormContent } from "@/types/landing";

type ContactFormProps = {
  content: ContactFormContent;
  locale: Locale;
};

type FieldErrorProps = {
  message?: string;
};

function FieldError({ message }: FieldErrorProps) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm leading-5 text-red-300">{message}</p>;
}

function inputClassName(hasError: boolean) {
  return cn(
    "min-h-12 w-full border bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-accent/70 focus:bg-white/[0.055]",
    hasError ? "border-red-300/60" : "border-white/12",
  );
}

const optionStyle = {
  backgroundColor: "#1A1A1A",
  color: "#FFFFFF",
} satisfies React.CSSProperties;

export function ContactForm({ content, locale }: ContactFormProps) {
  const formId = useId();
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const projectLabels = PROJECT_TYPE_LABELS[locale];
  const budgetOptions = BUDGET_RANGE_OPTIONS[locale];
  const urgencyOptions = URGENCY_OPTIONS[locale];
  const sourceOptions = CONTACT_SOURCE_OPTIONS[locale];
  const contactFormSchema = createContactFormSchema(content.validation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectType: undefined,
      budgetRange: "",
      urgency: "",
      message: "",
      source: "",
    },
  });

  const onSubmit = handleSubmit(async () => {
    setResultMessage(null);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 500);
    });

    setResultMessage(content.successMessage);
    reset();
  });

  return (
    <form
      className="grid gap-5 border border-white/10 bg-white/[0.025] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.32)] md:grid-cols-2 md:p-7"
      onSubmit={onSubmit}
      noValidate
    >
      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-fullName`}>
          {content.fields.fullName}
        </label>
        <input
          id={`${formId}-fullName`}
          className={inputClassName(Boolean(errors.fullName))}
          placeholder={content.placeholders.fullName}
          disabled={isSubmitting}
          {...register("fullName")}
        />
        <FieldError message={errors.fullName?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-companyName`}>
          {content.fields.companyName}
        </label>
        <input
          id={`${formId}-companyName`}
          className={inputClassName(Boolean(errors.companyName))}
          placeholder={content.placeholders.companyName}
          disabled={isSubmitting}
          {...register("companyName")}
        />
        <FieldError message={errors.companyName?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-email`}>
          {content.fields.email}
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          className={inputClassName(Boolean(errors.email))}
          placeholder={content.placeholders.email}
          disabled={isSubmitting}
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-phone`}>
          {content.fields.phone}
        </label>
        <input
          id={`${formId}-phone`}
          className={inputClassName(Boolean(errors.phone))}
          placeholder={content.placeholders.phone}
          disabled={isSubmitting}
          {...register("phone")}
        />
        <FieldError message={errors.phone?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-projectType`}>
          {content.fields.projectType}
        </label>
        <select
          id={`${formId}-projectType`}
          className={cn(inputClassName(Boolean(errors.projectType)), "[color-scheme:dark]")}
          disabled={isSubmitting}
          {...register("projectType")}
        >
          <option value="" style={optionStyle}>
            {content.selectPlaceholder}
          </option>
          {PROJECT_TYPES.map((projectType) => (
            <option key={projectType} value={projectType} style={optionStyle}>
              {projectLabels[projectType]}
            </option>
          ))}
        </select>
        <FieldError message={errors.projectType?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-budgetRange`}>
          {content.fields.budgetRange}
        </label>
        <select
          id={`${formId}-budgetRange`}
          className={cn(inputClassName(Boolean(errors.budgetRange)), "[color-scheme:dark]")}
          disabled={isSubmitting}
          {...register("budgetRange")}
        >
          <option value="" style={optionStyle}>
            {content.selectPlaceholder}
          </option>
          {budgetOptions.map((option) => (
            <option key={option} value={option} style={optionStyle}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.budgetRange?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-urgency`}>
          {content.fields.urgency}
        </label>
        <select
          id={`${formId}-urgency`}
          className={cn(inputClassName(Boolean(errors.urgency)), "[color-scheme:dark]")}
          disabled={isSubmitting}
          {...register("urgency")}
        >
          <option value="" style={optionStyle}>
            {content.selectPlaceholder}
          </option>
          {urgencyOptions.map((option) => (
            <option key={option} value={option} style={optionStyle}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.urgency?.message} />
      </div>

      <div>
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-source`}>
          {content.fields.source}
        </label>
        <select
          id={`${formId}-source`}
          className={cn(inputClassName(Boolean(errors.source)), "[color-scheme:dark]")}
          disabled={isSubmitting}
          {...register("source")}
        >
          <option value="" style={optionStyle}>
            {content.selectPlaceholder}
          </option>
          {sourceOptions.map((option) => (
            <option key={option} value={option} style={optionStyle}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.source?.message} />
      </div>

      <div className="md:col-span-2">
        <label className="text-xs font-bold uppercase tracking-[0.22em] text-white/55" htmlFor={`${formId}-message`}>
          {content.fields.message}
        </label>
        <textarea
          id={`${formId}-message`}
          className={cn(inputClassName(Boolean(errors.message)), "min-h-36 resize-y")}
          placeholder={content.placeholders.message}
          disabled={isSubmitting}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {resultMessage ? (
        <p
          className="md:col-span-2 border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-6 text-white"
          role="status"
        >
          {resultMessage}
        </p>
      ) : null}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center border border-accent/70 bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_36px_rgba(0,255,156,0.16)] transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:border-white/15 disabled:bg-white/10 disabled:text-white/35 disabled:shadow-none sm:w-auto"
        >
          {isSubmitting ? content.submittingLabel : content.submitLabel}
        </button>
      </div>
    </form>
  );
}
