export default async () => {
  try {
    const response = await fetch('http://localhost:4000/conversation/5e80d69979c89112f4c914e7');
    const conversation = response.json();
    console.log(conversation);
    return conversation;
  } catch(e) {
    console.log('An error occured fetching conversation');
    return null;
  }
}
