import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '@/lib/utils';
import { auth } from '@/auth';

export async function POST(request: Request) {
  const session = await auth();
  try {
    const { fileName } = await request.json();

    // Generate a presigned URL for S3 upload
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
      Key: `${session?.user.firstname}/shop/products/video/${fileName}`,
      ContentType: 'video/*',
    };

    const command = new PutObjectCommand(params);
    // const s3 = new S3Client(); // Create a new S3 client
    const presignedUrl = await getSignedUrl(s3Client, command, {});

    return Response.json({ presignedUrl });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}