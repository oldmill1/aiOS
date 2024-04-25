import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'aiOS HOMEPAGE' },
    { name: 'description', content: 'Welcome to aiOS!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to The Future: aiOS version 0.1</h1>
      <p>My Programs:</p>
      <ul>
        <li>
          <a href='/programs/counter'>Thesaurus</a>
        </li>
      </ul>
    </div>
  );
}
