/**
 * @param {import("@hydrophobefireman/ui-lib").ComponentProps<'form'>} props
 */
export function Form(props) {
  const { onSubmit: props$onSubmit, ...rest } = props;
  function handleSubmit(e) {
    e.preventDefault();
    if (props$onSubmit) return props$onSubmit();
  }
  return <form onSubmit={handleSubmit} {...rest} />;
}
