import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [user, photo] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    return results.map((result) => {
      return {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
      };
    });
  });

  return [user, photo];
}
