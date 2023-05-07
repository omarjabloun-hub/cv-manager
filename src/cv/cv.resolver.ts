import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import {Cv} from "./entities/cv.entity";
import {CvService} from "./cv.service";
import {CreateCvDto} from "./dto/create-cv.dto";
import { User } from "../user/entities/user.entity";

@Resolver(() => Cv)
export class CvResolver {
    constructor(private readonly cvService: CvService) {
    }

    @Query(() => [Cv] , { name: 'cvs' })
    findAll() {
        return this.cvService.findAll();
    }

    @Query(() => Cv, { name: 'cv' })
    findOne(@Args('cvId') cvId: number) {
        return this.cvService.findOne(cvId);
    }


}