import type {ComponentProps} from "@hydrophobefireman/ui-lib";
export function Form(props: ComponentProps<"form">) {
  const {onSubmit: props$onSubmit, ...rest} = props;
  function handleSubmit(
    this: HTMLFormElement,
    e: JSX.TargetedEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    if (props$onSubmit) return props$onSubmit.call(this, e);
  }
  return <form onSubmit={handleSubmit} {...rest} />;
}
