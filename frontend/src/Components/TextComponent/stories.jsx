import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quo nostrum tempore rerum dolores quasi vero quae quos voluptatibus nam voluptate, perferendis hic. Quia sint, non optio delectus rem ratione!',
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};
