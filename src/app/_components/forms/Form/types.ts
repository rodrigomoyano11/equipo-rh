import { PropsWithChildren } from 'react';
import { DefaultValues, FieldErrors, FieldValues } from 'react-hook-form';
import { ZodTypeAny } from 'zod';

type SubmitHandlerParams<Schema extends FieldValues> =
  | { isValid: false; errors: FieldErrors<Schema> }
  | { isValid: true; data: Schema }

type SubmitHandler<Schema extends FieldValues> = (
  params: SubmitHandlerParams<Schema>,
) => Promise<void>

type FormProps<Schema extends FieldValues> = PropsWithChildren<{
  schema: ZodTypeAny
  className?: string
  defaultValues?: DefaultValues<Schema>
  onSubmit: SubmitHandler<Schema>
}>

export type { FormProps, SubmitHandler };
