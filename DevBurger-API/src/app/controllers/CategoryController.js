import * as Yup from 'yup'
import Category from '../models/Category';
import User from '../models/User'


class CategoryController {
    async store(request, response){
    const schema = Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category: Yup.string().required()
    });

    try{
        await schema.validateSync(request.body, { abortEarly: false })
    } catch(err){
        return response.status(400).json({ error:err.errors })
    }

    const {admin: isAdmin} = await User.findByPk(request.userId)

    if (!isAdmin) {
        return response.status(501).json()
    }

    const {name} = request.body    

    const categoryExistis = await Category.findOne({
        where: {
            name,
        }
    })

    if (categoryExistis) {
        return response.status(400).json({error: 'Category already exists'})
    }

    const { id } = await Category.create({
        name,
    });

    return response.status(201).json({ id, name });
  }


    async index(){
        const categories = await Category.findAll
        return response.json(categories)
    }
}




export default new CategoryController()
