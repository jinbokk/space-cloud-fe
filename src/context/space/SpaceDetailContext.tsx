import { createContext } from 'react';

import { SpaceType } from '@/apis/spaces/types';

const SpaceDetailContext = createContext<SpaceType | undefined>(undefined);

export default SpaceDetailContext;
