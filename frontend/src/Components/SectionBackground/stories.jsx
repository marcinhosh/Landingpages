import { SectionBackground } from '.';

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>Section Background</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In facere quibusdam repellat, ipsum eos dolorum natus? Magni quo facilis ea vitae molestias sapiente adipisci eius sequi, voluptas est corrupti consequuntur.</p>
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
            <SectionBackground {...args} />
        </div>
    );
};
