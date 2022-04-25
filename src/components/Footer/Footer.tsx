import { FC, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');

  function subscribe() {
    revueFromSubscriptionSubmit({
      customUrl: 'http://news.onekey.so/add_subscriber',
      memberEmail: email,
    });
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={subscribe}>
        subscribe
      </button>
    </div>
  );
};
