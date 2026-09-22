# lockwright-lib-ui-react-hooks

A collection of React hooks for Lockwright that simplify form handling, state management, and UI interactions.

Site: [lockwright.dexterity.works](https://lockwright.dexterity.works)

Community fork of PearPass (Apache 2.0). Not affiliated with or endorsed by Tether Data or the Pears project.

## Table of Contents

- [Features](#features)
- [Security Notice](#security-notice)
- [Installation](#installation)
- [Usage Examples](#usage-examples)
- [Dependencies](#dependencies)
- [Related Projects](#related-projects)

## Features

- **useForm**: Form state management with validation, array fields, and nested values
- **useDebounce**: Delay state updates until after a specified delay
- **useThrottle**: Limit the frequency of state updates
- **useCountDown**: Create countdown timers with formatting

## Security Notice

The package name is `lockwright-lib-ui-react-hooks`.

## Installation

```bash
npm install git+https://github.com/Dexterity-Works/lockwright-lib-ui-react-hooks.git
```

## Usage Examples

### useForm

```jsx
import { useForm } from 'lockwright-lib-ui-react-hooks';

const MyForm = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.email) errors.email = 'Email is required';
        return errors;
    };

    const { values, errors, register, handleSubmit } = useForm({
        initialValues: { email: '', password: '' },
        validate,
    });

    const onSubmit = (formValues) => {
        console.log('Form submitted:', formValues);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} />
            {errors.email && <span>{errors.email}</span>}
            <button type="submit">Submit</button>
        </form>
    );
};
```

### useDebounce

```jsx
import { useDebounce } from 'lockwright-lib-ui-react-hooks';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { debouncedValue } = useDebounce({ value: searchTerm, delay: 500 });

    useEffect(() => {
        // This will only run 500ms after the last change to searchTerm
        fetchSearchResults(debouncedValue);
    }, [debouncedValue]);

    return (
        <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
        />
    );
};
```

### useThrottle

```jsx
import { useThrottle } from 'lockwright-lib-ui-react-hooks';

const InfiniteScroll = () => {
    const handleScroll = () => {
        // Load more content on scroll
    };

    const { throttle } = useThrottle({ interval: 300 });

    useEffect(() => {
        const throttledHandler = () => throttle(handleScroll);
        window.addEventListener('scroll', throttledHandler);
        return () => window.removeEventListener('scroll', throttledHandler);
    }, []);

    return <div>Scroll content...</div>;
};
```

### useCountDown

```jsx
import { useCountDown } from 'lockwright-lib-ui-react-hooks';

const Timer = () => {
    const timeRemaining = useCountDown({
        initialSeconds: 60,
        onFinish: () => alert('Time is up!'),
    });

    return <div>Time remaining: {timeRemaining}</div>;
};
```

## Dependencies

- React 18.3.1 or higher

## Related Projects

- [lockwright-app-mobile](https://github.com/Dexterity-Works/lockwright-app-mobile) - Lockwright for mobile
- [lockwright-app-desktop](https://github.com/Dexterity-Works/lockwright-app-desktop) - Lockwright for desktop
- [tether-dev-docs](https://github.com/Dexterity-Works/tether-dev-docs) - Documentations and guides for developers

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](./LICENSE) file for details.