import { FC } from "react";
import { cn } from "../../lib/utils";

enum Variants {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    subtitle1 = "subtitle1",
    subtitle2 = "subtitle2",
    body1 = "body1",
    body2 = "body2",
    caption = "caption",
    overline = "overline",
    }

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  variant: keyof typeof Variants;
}

const Typography: FC<TypographyProps> = ({ text, variant, className}) => {


    const tailwindClasses = {
        h1: 'text-white text-5xl',
        h2: 'text-white text-4xl',
        span: 'text-gray-500 text-sm',
        h3: 'text-white text-3xl',
        h4: 'text-white text-2xl',
        subtitle1: 'text-white text-lg',
        subtitle2: 'text-white text-base',
        body1: 'text-white text-sm',
        body2: 'text-white text-xs',
        caption: 'text-white text-xs',
        overline: 'text-white text-xs',
    }



  return (
    <span className={cn(tailwindClasses[variant], className)}>
        {text}
    </span>
  );
};

export default Typography;
