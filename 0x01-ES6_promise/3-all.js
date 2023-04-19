import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${userResponse.firstName} ${userResponse.lastName} ${photoResponse.body}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
