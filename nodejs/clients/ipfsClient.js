import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient({
    host: 'ipfs',
    port: '5001',
    method: 'http'
});

export default ipfs
