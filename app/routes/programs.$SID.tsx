import { json, LoaderFunction } from '@remix-run/node'; // For server-side utilities
import { useLoaderData } from '@remix-run/react'; // Correct import for client-side hook
import { PrismaClient, Program } from '@prisma/client';
const prisma = new PrismaClient();

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
