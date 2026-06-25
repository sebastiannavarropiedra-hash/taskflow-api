import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    // crear usuario
    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new this.userModel(createUserDto);
        return user.save();
    }

    // obtener todos los usuarios
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }


    // obtener un usuario por id
    async findOne(id: number): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    // actualizar un usuario por id
    async update(id: number, updateUserDto: CreateUserDto): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

   // Eliminar usuario
  async remove(id: number): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }



}
