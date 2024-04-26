import { ActionFunction, json, LoaderFunction } from '@remix-run/node'; // For server-side utilities
import { useLoaderData } from '@remix-run/react'; // Correct import for client-side hook
import { PrismaClient, Program } from '@prisma/client';
const prisma = new PrismaClient();
import Chat from '~/programs/chat'; // Import the Chat program

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const message = formData.get('message');
  console.log({ message });
  return json({ message });
};

export const loader: LoaderFunction = async ({ params }) => {
  const { SID } = params;
  const program = await prisma.program.findUnique({
    where: { SID },
  });

  if (!program) {
    throw new Response('Program not found', { status: 404 });
  }

  return json(program);
};

export default function ProgramDetail() {
  const program = useLoaderData<Program>(); // Apply the Program type here

  if (program.SID === 'chat') {
    // Return the Chat program which is a file in app/programs/chat.tsx
    return <Chat />;
  }

  return (
    <div>
      <h1>{program.programName}</h1>
      <p>{program.description}</p>
      <p>
        <strong>Prompt:</strong> {program.prompt}
      </p>
    </div>
  );
}
