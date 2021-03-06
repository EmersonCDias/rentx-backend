import SpecificationModel from '../../entities/SpecificationModel';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): SpecificationModel;
  findByName(name: string): boolean;
  list(): SpecificationModel[];
}
