declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string) => void;
  }
}

type Payload = {
  other_man: 1 | 0;
  sum: number;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycby2z013Gxn-LakI6teubi-GnD4u7JdvOj36MtJ3c1FbmVpYTTrd2r5hM2MXnuAzUI72eQ/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, variant: 'Variant4' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
