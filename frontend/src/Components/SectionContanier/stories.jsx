import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>Section Container</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, illum asperiores iusto itaque quae esse voluptatibus quibusdam sunt quisquam. Eius pariatur dolor ipsam error quas at, ratione totam quis quam!
                </p>
            </div>
        ),
    },
    argTypes: {
        children: { type: '' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    );
};
