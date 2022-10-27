export interface ICustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IIndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface IEnterpriseCustomerProtocol {
  companyName: string;
  cnpj: string;
}
