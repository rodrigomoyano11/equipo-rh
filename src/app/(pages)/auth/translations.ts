/* eslint-disable camelcase */

import { I18nVariables } from '@supabase/auth-ui-shared'

const translations: I18nVariables = {
  sign_up: {
    email_label: 'Correo electrónico',
    password_label: 'Contraseña',
    email_input_placeholder: 'Tu correo electrónico',
    password_input_placeholder: 'Tu contraseña',
    button_label: 'Crear cuenta',
    loading_button_label: 'Creando cuenta...',
    social_provider_text: 'Crear cuenta con {{provider}}',
    link_text: '¿No tienes una cuenta? Crea una',
    confirmation_text: 'Revisa tu correo electrónico para confirmar tu cuenta',
  },
  sign_in: {
    email_label: 'Correo electrónico',
    password_label: 'Contraseña',
    email_input_placeholder: 'Tu correo electrónico',
    password_input_placeholder: 'Tu contraseña',
    button_label: 'Iniciar sesión',
    loading_button_label: 'Iniciando sesión...',
    social_provider_text: 'Iniciar sesión con {{provider}}',
    link_text: '¿No tienes una cuenta? Crea una',
  },
  magic_link: {
    empty_email_address: 'Ingresa tu correo electrónico para iniciar sesión',
    email_input_label: 'Correo electrónico',
    email_input_placeholder: 'Tu correo electrónico',
    button_label: 'Iniciar sesión',
    loading_button_label: 'Iniciando sesión...',
    link_text: '¿No tienes una cuenta? Crea una',
    confirmation_text: 'Revisa tu correo electrónico para iniciar sesión',
  },
  forgotten_password: {
    button_label: 'Restablecer contraseña',
    confirmation_text: 'Revisa tu correo electrónico para restablecer tu contraseña',
    email_input_placeholder: 'Tu correo electrónico',
    email_label: 'Correo electrónico',
    link_text: '¿Olvidaste tu contraseña?',
    loading_button_label: 'Enviando...',
    password_label: 'Tu contraseña',
  },
  update_password: {
    password_label: 'Nueva contraseña',
    password_input_placeholder: 'Tu nueva contraseña',
    button_label: 'Actualizar contraseña',
    loading_button_label: 'Actualizando contraseña...',
    confirmation_text: 'Tu contraseña ha sido actualizada',
  },
  verify_otp: {
    button_label: 'Verificar token',
    email_input_label: 'Correo electrónico',
    email_input_placeholder: 'Tu correo electrónico',
    loading_button_label: 'Verificando token...',
    phone_input_label: 'Número de teléfono',
    phone_input_placeholder: 'Tu número de teléfono',
    token_input_label: 'Token',
    token_input_placeholder: 'Tu token OTP',
  },
}

export { translations }
