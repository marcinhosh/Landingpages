import { LogoLink } from '.';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        srcImg: 'assets/images/logo.png',
        link: 'http://google.com.br',
    },
};

export const ImageOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};
export const TextOnly = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};
TextOnly.args = {
    srcImg: '',
};
