import { Router, Request, Response } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists)
    return response.status(400).json({ error: 'Category already exists' });

  const category = categoriesRepository.create({
    name,
    description
  });

  return response.status(200).json(category);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

export default categoriesRoutes;