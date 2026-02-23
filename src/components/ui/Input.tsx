import { forwardRef } from 'react';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputBaseProps {
    label: string;
    error?: string;
}

type InputProps = InputBaseProps &
    InputHTMLAttributes<HTMLInputElement> & {
        as?: 'input';
    };

type TextareaProps = InputBaseProps &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as: 'textarea';
    };

type Props = InputProps | TextareaProps;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    ({ label, error, as = 'input', className = '', ...props }, ref) => {
        const baseClasses = `
      w-full px-4 py-3 rounded-xl
      bg-surface border border-surface-dark
      text-text-primary placeholder:text-text-light
      focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
      transition-all duration-200
      ${error ? 'border-red-400 focus:ring-red-300' : ''}
      ${className}
    `;

        return (
            <div className="space-y-1.5">
                <label className="block text-sm font-medium text-text-secondary">
                    {label}
                </label>
                {as === 'textarea' ? (
                    <textarea
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        className={`${baseClasses} resize-none min-h-[120px]`}
                        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : (
                    <input
                        ref={ref as React.Ref<HTMLInputElement>}
                        className={baseClasses}
                        {...(props as InputHTMLAttributes<HTMLInputElement>)}
                    />
                )}
                {error && (
                    <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
export default Input;
