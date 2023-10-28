type TFormatDate = (dateString: string) => string;

export const formatDate:TFormatDate = (dateString)=> {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric' as const, 
        month: 'long' as const, 
        day: 'numeric' as const, 
        hour: 'numeric' as const, 
        minute: 'numeric' as const
    };  
    return date.toLocaleString('us-US', options);
}

