import { json } from "@sveltejs/kit";
import { getCommit, getBranch, getRemote, getVersion } from "@imput/version-info";

// export const GET = async () => {
//   return json({
//     commit: await getCommit(),
//     branch: await getBranch(),
//     remote: await getRemote(),
//     version: await getVersion()
//   });
// };
// Disabled for Vercel deploy stability

export const prerender = true;
