import { EndpointUser, User } from "@/models/user.models";

export const createAdapter = (user: EndpointUser) => {
  const formatedUser: User = {
    name: user.firstName,
  };

  return formatedUser;
};
