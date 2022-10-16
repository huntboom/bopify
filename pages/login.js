import { getProviders, signIn } from "next-auth/react";
import Logo from "../public/bopify4drop.png";
import Image from "next/image";
function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-[#030a15] min-h-screen w-full justify-center">
        <Image src={Logo} alt="" width="1000em" height="350em"/>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="p-5 mb-50 mt--10 bg-[#fa6f70] rounded-lg text-white"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
