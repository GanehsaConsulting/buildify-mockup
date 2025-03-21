"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-gray-900 dark:text-gray-200",
        muted: "text-gray-500 dark:text-gray-400",
        error: "text-red-600 dark:text-red-400",
        success: "text-green-600 dark:text-green-400",
        main: "flex h-9 rounded-md px-3 py-1 text-base shadow-sm dark:bg-darkColor bg-lightColor dark:text-darkColor dark:text-lightColor",
      },
      size: {
        sm: "text-xs leading-tight",
        md: "text-sm leading-none",
        lg: "text-base leading-snug",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      data-slot="label"
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    />
  )
})

Label.displayName = "Label"

export { Label }
