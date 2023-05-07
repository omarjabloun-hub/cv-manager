import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import {Cv} from "./entities/cv.entity";
import {CvService} from "./cv.service";
import {CreateCvDto} from "./dto/create-cv.dto";
import { UpdateCvDto } from "./dto/update-cv.dto";
import { PubSub } from "graphql-subscriptions";

const pubSub = new PubSub();

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
        const newCv = this.cvService.create(createCvInput);
        pubSub.publish('cvAdded', { cvAdded: newCv });
        return newCv;
    }

    @Mutation(() => Cv)
    updateCv(
      //@Args('id') id:number,
      @Args('updateCvInput') updateCvInput: UpdateCvDto) {
        const updatedCv = this.cvService.update(updateCvInput.id, updateCvInput);
        pubSub.publish('cvUpdated', { cvUpdated: updatedCv });
        return updatedCv;
    }

    @Mutation(() => Cv)
    removeCv(@Args('cvId') cvId: number) {
        const deletedCv = this.cvService.remove(cvId);
        pubSub.publish('cvDeleted', { cvDeleted: deletedCv });
        return deletedCv;
    }

    @Subscription(() => Cv, {
        name: 'cvAdded',
        filter: (payload, variables) => {
            // You can add a filter here to filter out the events
            return true;
        }
    })
    cvAdded() {
        console.log("cv added");
        return pubSub.asyncIterator('cvAdded');
    }



    @Subscription(() => Cv, {
        name: 'cvUpdated',
        filter: (payload, variables) => {
            // You can add a filter here to filter out the events
            return true;
        }
    })
    cvUpdated() {
        return pubSub.asyncIterator('cvUpdated');
    }



    @Subscription(() => Cv, {
        name: 'cvDeleted',
        filter: (payload, variables) => {
            // You can add a filter here to filter out the events
            return true;
        }
    })
    cvDeleted() {
        return pubSub.asyncIterator('cvDeleted');
    }




}