import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Cv} from "./entities/cv.entity";
import {CvService} from "./cv.service";
import {CreateCvDto} from "./dto/create-cv.dto";
import { UpdateCvDto } from "./dto/update-cv.dto";

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

    @Mutation(() => Cv)
    createCv(@Args('createCvInput') createCvInput:  CreateCvDto) {
        return this.cvService.create(createCvInput);
    }

    @Mutation(() => Cv)
    updateCv(
      //@Args('id') id:number,
      @Args('updateCvInput') updateCvInput: UpdateCvDto) {
        return this.cvService.update(updateCvInput.id, updateCvInput);
    }

    @Mutation(() => Cv)
    removeCv(@Args('cvId') cvId: number) {
        return this.cvService.remove(cvId);
    }


}