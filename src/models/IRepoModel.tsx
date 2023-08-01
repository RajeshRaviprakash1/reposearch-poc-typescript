

export interface IRepoModel {
  id:                          number;
  node_id:                     string;
  name:                        string;
  full_name:                   string;
  owner:                       Owner;
  created_at:                  Date;
  updated_at:                  Date;
}


export interface Owner {
  login:               string;
  id:                  number;
  avatar_url:          string;
  html_url:            string;
}