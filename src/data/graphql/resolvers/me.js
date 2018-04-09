const me = ({ request }) =>
  request.user && {
    id: request.user.id,
    email: request.user.email,
  };

const resolverObject = {
  Query: { me },
};

export default resolverObject;
