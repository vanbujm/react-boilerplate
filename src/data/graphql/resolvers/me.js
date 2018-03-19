const me = ({ request }) =>
  request.user && {
    id: request.user.id,
    email: request.user.email,
  };

export default me;
