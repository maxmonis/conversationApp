export const exampleUser = {
  _id: "5e80d69979c89112f4c914e9",
  name: "Test Testerson",
  profilePicture: "https://www.thesprucepets.com/thmb/iUPr_d3DJ78DFE_7q6FcPxeGaHU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/twenty20_d2b57e80-6815-4c83-9ea6-0e1438e9b79f-5ac3b27deb97de0037092d49.jpg",
  status: "ACTIVE"
};

const messagePayload = {
  message: {
		user: exampleUser
	}
}

export default async (text) => {
  messagePayload.message.body = text;
  try {
    const response = await fetch('http://localhost:4000/conversation/5e80d69979c89112f4c914e7',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messagePayload),
    });
    const conversation = response.json();
    console.log(conversation);
    return conversation;
  } catch(e) {
    console.log('An error occured fetching conversation');
    return null;
  }
}
