export interface Teachers {
  id: number,
  name: string,
  email: string,
  deactivated: boolean,
  careers:[
    {
      id: number,
      name: string
    }
  ]
}
