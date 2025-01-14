import { useDispatch } from 'react-redux';

export const loginHelper = async () => {
  const dispatch = useDispatch();

  const SERVER_URL = 'http://localhost:3000/api/';
  try {
    const res = await fetch(SERVER_URL + 'auth/login', {
      body: JSON.stringify({
        email: 'ney@mar.com',
        password: 'Neymar@1234'
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const token: {token: string} = await res.json();
  } catch (e) {
    console.error('ERROR');
    // return e;
  }

}
