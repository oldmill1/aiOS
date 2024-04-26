import { Form } from '@remix-run/react';

export default function Chat() {
  return (
    <div>
      <h1>Chat Program</h1>
      <p>This is a chat program.</p>
      <Form method='post'>
        <textarea name='message' rows={4} cols={50} />
        <button type='submit'>Send</button>
      </Form>
    </div>
  );
}
