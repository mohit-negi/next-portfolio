/** @type {import('next').NextConfig} */
const nextConfig = 
{
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.ssnity.io",
                port:"",
            }
        ]
    }
};

export default nextConfig;
