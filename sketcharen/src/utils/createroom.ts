export const CreateRoom = (router: any) => {
    const roomCode = Math.floor(100000 + Math.random() * 900000);
    console.log("Host room with code:", roomCode);
    router.push(`/rooms/${roomCode}`);
  };