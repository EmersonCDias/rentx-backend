import { ISpecificationRepository } from '../../repositories/Specification/ISpecificationRepository';
import SpecificationModel from '../../entities/SpecificationModel';

class ListSpecificationsService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  start(): SpecificationModel[] {
    return this.specificationRepository.list();
  }
}

export default ListSpecificationsService;
