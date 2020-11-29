export interface Service {
  action: string;
  service: string;
  stateName: string;
}

export interface Method {
  method: string;
  services: Array<Service>;
}
export interface Route {
  url: string;
  title: string;
  methods: Array<Method>;
  component: string;
}
