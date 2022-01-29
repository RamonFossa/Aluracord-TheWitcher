import { Box, Button } from '@skynexui/components';
import { useRouter } from 'next/router';

function TextPageNotFound(arg1) {
    const Tag = arg1.tag || 'h3';
    return (
        <>
            <Tag>{arg1.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: white;
                    font-size: 22px;
                    font-weight: 600;
                }
            `}</style>
        </>
    )
}

export default function ErrorPage() {
    const rout = useRouter();
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', justifyContent: 'right', position: 'relative',
                    backgroundImage: 'url(https://i.pinimg.com/originals/51/3b/0a/513b0afad8d368510b91104873f481fc.gif)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    as="form"
                    onSubmit={function (event) {
                        event.preventDefault();
                        rout.back('default')
                    }}
                    styleSheet={{
                        borderRadius: '5px', padding: '32px', margin: '16px', justifyContent: 'right',
                        display: 'flex', position: 'absolute', bottom: '0',
                        width: '350px', height: '100px',
                    }}
                >
                    <Box
                        styleSheet={{
                            lineHeight: 1.7,
                        }}
                    >
                        <TextPageNotFound>Página não encontrada :(</TextPageNotFound>
                        <Button
                            styleSheet={{
                                width: '100%', display: 'flex', justifyContent: 'center'
                            }}
                            type='submit'
                            label='Ínicio'
                            buttonColors={{
                                contrastColor: '#1c1c1c',
                                mainColor: '#fcba03',
                                mainColorLight: '#fce703',
                                mainColorStrong: '#ffca38',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
}