import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(arg1) {
    const Tag = arg1.tag || 'h1';
    return (
        <>
            <Tag>{arg1.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

// function followersReturn() {
//     fetch(`https://api.github.com/users/xerlyzin`).then(function(serverAnswer) { return serverAnswer.json() }).then(function(convertedAnswer) {
        
//         console.log(convertedAnswer.data);
//     })
// }

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('');
    const rout = useRouter();
    let userfollowers;
    let image;
    if (username.length > 2) {
        image = `https://github.com/${username}.png`;
    } else {
        image = `https://image.mmradio.com/sites/default/files/styles/article_wider__1x_/public/medallion.jpg`;
    }

    

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[300],
                    backgroundImage: 'url(https://i.ibb.co/dfPSwWF/The-Witcher-Wallpaper.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                    }}
                >
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault();
                            rout.push('chat');
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            value={username}
                            onChange={function handler(event) {
                                setUsername(event.target.value);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />


                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`${image}`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>

                        <Box
                            styleSheet={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: '200px',
                                padding: '4px',
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                border: '1px solid',
                                borderColor: appConfig.theme.colors.neutrals[100],
                                borderRadius: '10px',
                                flex: 1
                            }}
                        >
                            <Text
                                variant="body4"
                                styleSheet={{
                                    color: appConfig.theme.colors.neutrals[200],
                                    backgroundColor: appConfig.theme.colors.neutrals[900],
                                    borderRadius: '5px'
                                }}
                            >
                                0 Repositórios
                            </Text>

                        </Box>

                        <Box
                            styleSheet={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: '200px',
                                padding: '4px',
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                border: '1px solid',
                                borderColor: appConfig.theme.colors.neutrals[100],
                                borderRadius: '10px',
                                flex: 1
                            }}
                        >
                            <Text
                                variant="body4"
                                styleSheet={{
                                    color: appConfig.theme.colors.neutrals[200],
                                    backgroundColor: appConfig.theme.colors.neutrals[900],
                                    borderRadius: '5px'
                                }}
                            >
                                0 Seguidores
                            </Text>

                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    );
}