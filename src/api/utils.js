export async function authenticate(message) {
  try {
    const user = await Moralis.authenticate({
      signingMessage: message,
    });
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
}

