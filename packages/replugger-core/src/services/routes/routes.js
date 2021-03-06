const routesMap = new Map();

export function addRoute(routeId, url) {
  if (typeof routeId !== 'symbol') {
    console.warn(`It's recommended to use Symbol(${routeId}) for naming the route id`);
  }

  if (routesMap.has(routeId)) {
    throw new TypeError('Route with this id is already in use. Please use different route.');
  }

  routesMap.set(routeId, url);
}

export function getRoute(routeId) {
  if (typeof routeId !== 'symbol') {
    const routes = Array.from(routesMap.entries());

    throw new TypeError(`You need to use defined name of the route. Possible routes are ${routes}`);
  }

  if (!routesMap.has(routeId)) {
    throw new TypeError(`Cannot find the route named "${routeId}"`);
  }

  return routesMap.get(routeId);
}
